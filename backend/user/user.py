from flask import Blueprint, request, jsonify
from firebase_admin import auth
import sys
import traceback

from DB_Collections import *
from utils.utils import *

user = Blueprint("user", __name__, template_folder="user")



@user.route('/user/register', methods = ['POST'])
def register():
    try:
        req = request.json
        email = req['email'].lower()
        phone = req['phone']
        name = req['name']
        password = req['password']
        user = auth.create_user(email = email, password = password, disabled=False)
        user_obj = {
            'phone' :  phone,
            'name' : name,
            'email' : email
        }
        USER.document(email).set(user_obj)
        return jsonify({'status' : True , 'response' : user_obj})
    
    except Exception as err:
        error = get_error_obj(sys.exc_info(), err)
        print(traceback.format_exc())
        return jsonify({"status": False,"response":error}), 400



@user.route('/user/get_user',methods=['GET']) 
def get_user(): 
    try:         
        users = USER.stream()
        user_list = []
        for user in users:
            user_dict = user.to_dict()
            user_list.append(user_dict)

        return jsonify({'status' : True , 'response' : user_list})
        
    except Exception as err:
        error = get_error_obj(sys.exc_info(), err)
        print(traceback.format_exc())
        return jsonify({"status": False,"response":error}), 400



@user.route('/user/get_user_courses',methods=['GET']) 
def get_user_courses(): 
    try:         
        req = request.json
        user_id = req['user_id']
        user_courses =USER_COURSE.where("email", "==", user_id).get()
        user_course_list = []
        for user_course in user_courses:
            user_course_dict = user_course.to_dict()
            course_id = user_course_dict['course_id']
            course_dict = COURSE.document(course_id).get().to_dict()
            user_course_dict['course_details']=course_dict
            user_course_list.append(user_course_dict)

        return jsonify({'status' : True , 'response' : user_course_list})
        
    except Exception as err:
        error = get_error_obj(sys.exc_info(), err)
        print(traceback.format_exc())
        return jsonify({"status": False,"response":error}), 400


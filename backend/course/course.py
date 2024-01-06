from flask import Blueprint, request, jsonify
import sys
import traceback

from DB_Collections import *
from utils.utils import *

course = Blueprint("course", __name__, template_folder="course")


@course.route('/course/create_course', methods = ['POST'])
def create_course():
    try:
        req = request.json
        name = req['name']
        content = req['content']
        title_image = req['title_image']
        price = req['price']
        enrolled_number = req['enrolled_number']
        last_updated = req['last_updated']
        content_creator = req['content_creator']
        course_obj = {
            'name' :  name,
            'content' : content,
            'title_image' : title_image,
            'price' : price,
            'enrolled_number' : enrolled_number,
            'last_updated' : last_updated,
            'content_creator' : content_creator

        }
        COURSE.document().set(course_obj)
        return jsonify({'status' : True , 'response' : course_obj})
    
    except Exception as err:
        error = get_error_obj(sys.exc_info(), err)
        print(traceback.format_exc())
        return jsonify({"status": False,"response":error}), 400
    

@course.route('/course/update_course', methods = ['PUT'])
def update_course():
    try:
        req = request.json
        course_id = req['course_id']
        name = req['name']
        content = req['content']
        title_image = req['title_image']
        price = req['price']
        enrolled_number = req['enrolled_number']
        last_updated = req['last_updated']
        content_creator = req['content_creator']
        course_obj = {
            'name' :  name,
            'content' : content,
            'title_image' : title_image,
            'price' : price,
            'enrolled_number' : enrolled_number,
            'last_updated' : last_updated,
            'content_creator' : content_creator

        }
        COURSE.document(course_id).update(course_obj)
        return jsonify({'status' : True , 'response' : course_obj})
    
    except Exception as err:
        error = get_error_obj(sys.exc_info(), err)
        print(traceback.format_exc())
        return jsonify({"status": False,"response":error}), 400

@course.route('/course/delete_course', methods = ['DELETE'])
def delete_course():
    try:
        req = request.json
        course_id = req['course_id']
        COURSE.document(course_id).delete()
        return jsonify({'status' : True , 'response' : course_id+"deleted succesfully"})
    
    except Exception as err:
        error = get_error_obj(sys.exc_info(), err)
        print(traceback.format_exc())
        return jsonify({"status": False,"response":error}), 400



@course.route('/course/course_register', methods = ['POST'])
def course_register():
    try:
        req = request.json
        user_id = req['user_id']
        course_id = req['course_id']
        user_dict = USER.document(user_id).get().to_dict()
        email = user_dict['email']
        phone = user_dict['phone']
        name = user_dict['name']
        
        course_register_obj = {
            'phone' :  phone,
            'name' : name,
            'email' : email,
            'course_id' : course_id
        }
        USER_COURSE.document().set(course_register_obj)
        return jsonify({'status' : True , 'response' : course_register_obj})
    
    except Exception as err:
        error = get_error_obj(sys.exc_info(), err)
        print(traceback.format_exc())
        return jsonify({"status": False,"response":error}), 400
    

    
@course.route('/course/course_list',methods=['GET']) 
def course_list():  
    try:        
        courses = COURSE.stream()
        course_list = []
        for course in courses:
            course_dict = course.to_dict()
            course_list.append(course_dict)
        return jsonify({'status' : True , 'response' : course_list})
    
    except Exception as err:
            error = get_error_obj(sys.exc_info(), err)
            print(traceback.format_exc())
            return jsonify({"status": False,"response":error}), 400
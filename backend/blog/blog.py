from flask import Blueprint, request, jsonify
import sys, os
import traceback
from firebase_admin import storage
import datetime as DT  
from DB_Collections import BLOG
from utils.utils import *

blog = Blueprint("blog", __name__, template_folder="blog")


@blog.route('/blog/create_blog', methods = ['POST'])
def create_blog():
    # try:

        req = request.form
        title = req['title']
        content = req['content']
        image = request.files['image']
        created_on = req['created_on']
        blog_creator = req['blog_creator']
        filename = image.filename
        
        dt_object = DT.datetime.now()
        str_timestamp = str(dt_object.strftime('%d%m%Y%H%M%S%f'))
        filename = str_timestamp+filename

        image.save(filename)        
        bucket = storage.bucket("education-database-dfa68.appspot.com")
        
        blob = bucket.blob(filename)
        
        blob.upload_from_filename(filename)
        blob.make_public()
        public_url = blob.public_url
        os.remove(filename)
        blog_obj = {
            'title' :  title,
            'content' : content,
            'image' : public_url,
            'created_on' : created_on,
            'blog_creator' : blog_creator

        }
        BLOG.document().set(blog_obj)
        return jsonify({'status' : True , 'response' : blog_obj})
    
    # except Exception as err:
    #     error = get_error_obj(sys.exc_info(), err)
    #     print(traceback.format_exc())
    #     return jsonify({"status": False,"response":error}), 400
    
    

@blog.route('/blog/update_blog', methods = ['PUT'])
def update_blog():
    try:
        req = request.json
        blog_id = req['blog_id']
        title = req['title']
        content = req['content']
        image = req['image']
        created_on = req['created_on']
        blog_creator = req['blog_creator']
        blog_obj = {
            'title' :  title,
            'content' : content,
            'image' : image,
            'created_on' : created_on,
            'blog_creator' : blog_creator

        }
        BLOG.document(blog_id).update(blog_obj)
        return jsonify({'status' : True , 'response' : blog_obj})
    
    except Exception as err:
        error = get_error_obj(sys.exc_info(), err)
        print(traceback.format_exc())
        return jsonify({"status": False,"response":error}), 400
    

@blog.route('/blog/delete_blog', methods = ['DELETE'])
def delete_blog():
    try:
        req = request.json
        blog_id = req['blog_id']
        BLOG.document(blog_id).delete()
        return jsonify({'status' : True , 'response' : blog_id+" deleted succesfully"})
    
    except Exception as err:
        error = get_error_obj(sys.exc_info(), err)
        print(traceback.format_exc())
        return jsonify({"status": False,"response":error}), 400
    
    
def trim_content(content, lines=5):
    return '\n'.join(content.split('\n')[:lines])

    
@blog.route('/blog/blog_list',methods=['GET']) 
def blog_list(): 
    try:         
        
        blogs = BLOG.stream()
        blog_list = []
        for blog in blogs:
            blog_dict = blog.to_dict()
            blog_dict["id"] = blog.id
            blog_dict["content"] = blog_dict["content"][:300]+"..."
            blog_list.append(blog_dict)
            
        return jsonify({'status' : True , 'response' : blog_list})
    
    except Exception as err:
        error = get_error_obj(sys.exc_info(), err)
        print(traceback.format_exc())
        return jsonify({"status": False,"response":error}), 400
    


    
@blog.route('/blog/blog_readmore',methods=['GET']) 
def blog_readmore(): 
    try:     

        id=request.args.get('id')
        blog = BLOG.document(id).get().to_dict()
            
        return jsonify({'status' : True , 'response' : blog})
    
    except Exception as err:
        error = get_error_obj(sys.exc_info(), err)
        print(traceback.format_exc())
        return jsonify({"status": False,"response":error}), 400
    



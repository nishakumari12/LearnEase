
from blog.blog import blog
from user.user import user
from course.course import course

from app import app

app.register_blueprint(blog)
app.register_blueprint(user)
app.register_blueprint(course)

if __name__=="__main__":
    app.run(host='127.0.0.1', port=8080, debug=True)  #port should be above 8000





# firebase_admin.initialize_app(cred,{'storageBucket': 'education-database-dfa68.appspot.com'})
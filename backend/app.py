from flask import Flask   #primary imports
import firebase_admin
from firebase_admin import firestore, credentials, storage
from flask_cors import CORS, cross_origin




app=Flask(__name__)

cred = credentials.Certificate('config.json')
# firebase_admin.initialize_app(cred)
firebase_admin.initialize_app(cred,{'storageBucket': 'education-database-dfa68.appspot.com'})
cors = CORS(app)
db=firestore.client()


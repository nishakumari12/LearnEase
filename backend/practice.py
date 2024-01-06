import firebase_admin
from firebase_admin import firestore, credentials


cred = credentials.Certificate('config.json')
firebase_admin.initialize_app(cred)

db=firestore.client()

NISHA_KUMARI = db.collection("nishakumari")

# for doc in NISHA_KUMARI.stream():
#     print(doc.id,doc.to_dict())

# doc_ref = NISHA_KUMARI.document()
#doc_ref.set({"first": "Alan", "middle": "Mathison", "last": "Turing", "born": 1912})

#find a document where name = "nisha" leave if it doesn't exist

# docs = (
#       NISHA_KUMARI.where("name", "==", "nisha").get()
#   )

# for doc in docs:
#       print(f"{doc.id} => {doc.to_dict()}")


#find number of documents in a collection
# docs = NISHA_KUMARI.stream()

#  Count the number of documents
# num_documents = sum(1 for _ in docs)

# print(f"Number of documents in the collection: {num_documents}")

#update a document whose name is "test-document"

doc_ref = NISHA_KUMARI.document("test-document")



# doc_ref.update({
#     "name": "nimmo",
#     "age": 22,
#         # Add more fields as needed
#     })

print(doc_ref) #reference
print(doc_ref.get()) #documentsnapshot 
print(doc_ref.get().to_dict()) #json format



#List all documents in a collection

# docs = NISHA_KUMARI.stream()

# for doc in docs:
#     print(f"{doc.id} => {doc.to_dict()}")


#Find a document where document name = "test-document"

# query = NISHA_KUMARI.where("doc.d", "==", "test-document").limit(1)
# results = query.stream()

# # Check if there are any results
# for doc in results:
#     print(f"Document found: {doc.id} => {doc.to_dict()}")
# else:
#     print("No document with name 'test-document' found.")
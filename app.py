from flask import Flask, render_template, request
import hashlib
import utils.auth

#myHashObj = hashlib.sha1()
#myHashObj.update("foo")
#myHashObj.update("boo") -- concatenates, update string is now "fooboo"
#myHashObj.hexdigest() -- digests update string, returns hex string

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("auth.html")

@app.route("/login", methods=["POST"])
def login():
    userinput = request.form["user"]
    passinput = request.form["pass"]
    shaHash = hashlib.sha1()
    shaHash.update(passinput)
    passHash = shaHash.hexdigest()
    users = utils.auth.getUsers()
    if (userinput in users):
        if (users[userinput] == passHash):
            return render_template("auth.html", cond="Successfully authenticated!")
        return render_template("auth.html", cond="Incorrect password.")
    return render_template("auth.html", cond="Account not found.")
    
@app.route("/register", methods=["POST"])
def register():
    userinput = request.form["user"]
    passinput = request.form["pass"]
    shaHash = hashlib.sha1()
    shaHash.update(passinput)
    passHash = shaHash.hexdigest()
    users = utils.auth.getUsers()
    if (userinput in users):
        return render_template("auth.html", cond="Username already exists!")
    utils.auth.addUser(userinput,passHash)
    return render_template("auth.html", cond="Account created.")

if (__name__ == "__main__"):
	app.debug = True
	app.run()

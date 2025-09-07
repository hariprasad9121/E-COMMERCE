from flask import Flask
from flask_cors import CORS
from routes.products import products_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(products_bp)

if __name__ == "__main__":
    app.run(debug=True)

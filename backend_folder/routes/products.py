from flask import Blueprint, jsonify, request
from models.product_model import products

products_bp = Blueprint('products', __name__, url_prefix='/api/products')


@products_bp.route('/', methods=['GET'])
def get_products():
    return jsonify(products)


@products_bp.route('/', methods=['POST'])
def add_product():
    data = request.json
    new_product = {
        "id": len(products) + 1,
        "name": data.get("name"),
        "price": data.get("price")
    }
    products.append(new_product)
    return jsonify({"message": "Product added", "product": new_product}), 201

  export var productsData = [
    {'_id': 1, 'name': 'computer', 'price': '$100'},
    {'_id': 2, 'name': 'phone', 'price': '$150'},
    {'_id': 3, 'name': 'apple watch', 'price': '$200'},
    {'_id': 4, 'name': 'bike', 'price': '$300'},
  ]
  export var cartData = [
    {'_id': 1, 'userId': 1, 'productId': 1},
    {'_id': 2, 'userId': 2, 'productId': 2},
    {'_id': 3, 'userId': 3, 'productId': 3}
  ]
  export var shippingData = [
    {'_id': 1, 'userId': 1, 'productId': 1, 'address': 'st#1, house#4, London', 'shipmentStatus': 'On the way', 'shipmentFee': '$100'},
    {'_id': 2, 'userId': 2, 'productId': 2, 'address': 'st#1, house#4, US', 'shipmentStatus': 'awaiting at US customs','shipmentFee': '$100'},
    {'_id': 3, 'userId': 3, 'productId': 3, 'address': 'st#1, house#4, US', 'shipmentStatus': 'cancelled','shipmentFee': '$100'},
  ]
  export var productPayment = [
    {'_id': 1, 'userId': 1, 'productId': 1, 'price': '$100', 'status': 'paid', 'shippingId': 1},
    {'_id': 2, 'userId': 2, 'productId': 2, 'price': '200', 'status': 'paid', 'shippingId': 2},
    {'_id': 3, 'userId': 3, 'productId': 3, 'price': '$300', 'status': 'paid', 'shippingId': 3},
  ]
  
  export var productConfirmation = [
    {'_id': 1, 'userId': 1, 'productId': 1, 'price': '$100', 'status': 'paid', 'shippingId': 1, 'confirmation': 'OK'},
    {'_id': 2, 'userId': 2, 'productId': 2, 'price': '200', 'status': 'paid', 'shippingId': 2, 'confirmation': 'OK'},
    {'_id': 3, 'userId': 3, 'productId': 3, 'price': '$300', 'status': 'paid', 'shippingId': 3, 'confirmation': 'OK'},
  ]
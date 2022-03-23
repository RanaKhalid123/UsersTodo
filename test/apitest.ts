//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../src/index.ts');
let should = chai.should();
chai.use(chaiHttp);

describe('Product', () => {

  describe('/POST add-to-cart', () => {
    it('it should not POST a product to cart', (done) => {
        let productToCart = { userId: 1, productId: 1}
      chai.request(app)
          .post('/add-to-cart')
          .send(productToCart)
          .end((err:any, res:any) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('pages');
                res.body.errors.pages.should.have.property('kind').eql('required');
            done();
          });
    });
  });

  describe('/POST shipping', () => {
    it('it should not POST a product for shipping', (done) => {
        let shippingProduct =  { userId: 1, productId: 1, address: 'st#1, house#4, London', shipmentStatus: 'On the way', shipmentFee: '$100'}
      chai.request(app)
          .post('/shipping')
          .send(shippingProduct)
          .end((err:any, res:any) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('pages');
                res.body.errors.pages.should.have.property('kind').eql('required');
            done();
          });
    });
  });


  describe('/POST shipping', () => {
    it('it should not POST a product for shipping', (done) => {
        let shippingProduct =  { userId: 100, productId: 1, address: 'st#1, house#4, London', shipmentStatus: 'On the way', shipmentFee: '$100'}
      chai.request(app)
          .post('/shipping')
          .send(shippingProduct)
          .end((err:any, res:any) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('pages');
                res.body.errors.pages.should.have.property('kind').eql('required');
            done();
          });
    });
  });

  describe('/POST payment', () => {
    it('it should not POST a payment of product', (done) => {
        let payment =   {userId: 1, productId: 1, price: '$100', status: 'paid', shippingId: 1}
      chai.request(app)
          .post('/payment')
          .send(payment)
          .end((err:any, res:any) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('pages');
                res.body.errors.pages.should.have.property('kind').eql('required');
            done();
          });
    });
  });

  describe('/POST payment', () => {
    it('it should not POST a payment of product', (done) => {
        let payment =   {userId: 100, productId: 1, price: '$100', status: 'paid', shippingId: 1}
      chai.request(app)
          .post('/payment')
          .send(payment)
          .end((err:any, res:any) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('pages');
                res.body.errors.pages.should.have.property('kind').eql('required');
            done();
          });
    });
  });


  describe('/POST confirmation', () => {
    it('it should not POST a confirmation of product', (done) => {
        let confirmation =   {userId: 1, productId: 1, price: '$100', status: 'paid', shippingId: 1, confirmation: 'OK'}
      chai.request(app)
          .post('/confirmation')
          .send(confirmation)
          .end((err:any, res:any) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('pages');
                res.body.errors.pages.should.have.property('kind').eql('required');
            done();
          });
    });
  });

  describe('/POST confirmation', () => {
    it('it should not POST a confirmation of product', (done) => {
        let confirmation =   {userId: 100, productId: 1, price: '$100', status: 'paid', shippingId: 1, confirmation: 'OK'}
      chai.request(app)
          .post('/confirmation')
          .send(confirmation)
          .end((err:any, res:any) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('pages');
                res.body.errors.pages.should.have.property('kind').eql('required');
            done();
          });
    });
  });

});
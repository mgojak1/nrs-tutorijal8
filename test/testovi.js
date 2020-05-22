const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
chai.should();

chai.use(chaiHttp);

describe('Test servera', function() {
     
 let grad = {id:1,naziv: 'Sarajevo', brojStanovnika:300}; 
beforeEach(function() {   
 describe('GET test', ()=> {
      it('GET /api/gradovi', (done) => {
           chai.request(app)
           .get('/gradovi')
           .end((err, res) => {
               res.should.have.status(200);
               res.should.be.json;
               res.body.should.be.a('array');
               res.body[0].should.have.property('naziv');
                done();
            }); 
        });
    });
 });
  describe('Post test', ()=> {
        
        it('POST /api/gradovi', (done) => {
             
            chai.request(app)
            .post('/grad')
            .send(grad)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('naziv');
                done();
            }); 
        });
    });

 describe('GET id test', () => {
        it('vraca grad koji ima odabrani id', (done) => {
            chai.request(app)
            .get('/gradovi/' + grad.id)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('naziv').eql('Sarajevo');
                done();
            });
        });
       
    });

afterEach(function() {   
    describe('Put id test', () => {
        it('postavlja novi grad sa zadanim id', (done) => {
            chai.request(app)
            .put('/gradovi/' + grad.id)
            .send({naziv: "noviGrad",broj_stanovnika: "123"})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql('Novi grad spasen!');
                done();
            });
        });
       });
    });
});
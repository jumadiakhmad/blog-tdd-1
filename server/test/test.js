const chai = require('chai');
const chaiHttp = require('chai-http');
const axios = require('axios')
const Article = require('../models/articleModel')
var should = chai.should();

chai.use(chaiHttp);

//test route
// describe('Create Article', () => {
//   it('Create Article dengan method POST', (done) => {
//     axios.post('http://localhost:3000/articles', {
//       author: 'init author',
//       title: 'init title',
//       content: 'ini content'
//     })
//     .then( (res) => {
//       //console.log(res);
//       res.should.have.status(200)
//       done()
//     })
//     .catch(err => console.log(err));
//   })
// })

describe('Get All Article', () => {
  it('Menampilkan semua article', (done) => {
    axios.get('http://localhost:3000/articles/')
    .then( (res) => {
      res.should.be.json;
      res.should.have.status(200);
      done()
    })
    .catch(err => console.log(err));
  })
})

describe('Delete Article', () => {
  it('hapus article berdasrkan id', (done) => {
    let id = '5988572484b1010da2badff9';
    axios.delete('http://localhost:3000/articles/' + id)
    .then( (res) => {
      // console.log(res);
      res.should.have.status(200)
      done()
    })
    .catch(err => console.log(err));
  })
})

describe('PUT Article', () => {
  it('update article berdasrkan id', (done) => {
    axios.put('http://localhost:3000/articles/598857eb84b1010da2badffd', {
      author: 'Adnin',
      title: 'TDD',
      content: 'Testing TDD'
    })
    .then( (res) => {
      res.should.have.status(200)
      done()
    })
    .catch( err => console.log(err));
  })
})

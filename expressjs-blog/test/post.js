const assert = require('assert')
const request = require('supertest')
const { describe, it } = require('mocha');

const app = require('../app')
const {Post} = require('../models/post')

describe('Post', () => {
    describe('Post create', () => {
        it('create post', (done) => {
            request(app).post(
                '/posts'
            ).set('Authorization', '123').send(
                {
                    "title": "dasda",
                    "content": "utku"
                }
            ).expect(
                201
            ).end(done)
        })
    })

    describe('Post update', () => {
        it('update post', (done) => {
            const post = new Post({
                title:'dd',
                content: 'ff',
            })
            post.save((err, p) => {
                const url = '/posts/' + p.id
                console.log(url)
                request(app).patch(
                    url
                ).send({'title': 'aa'})
                .expect(201)
                .expect((res) => {res.body.title == 'aa'})
                .end(done)
            })

        })
    })

})


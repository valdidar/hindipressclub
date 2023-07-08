const express = require('express')
const path = require('path')
const blogs = require(path.join('../data/blogs'))

const router = express.Router()

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname,'../templates/index.html'))
    res.render('home')
})
router.get('/blog', (req, res) => {
    // res.sendFile(path.join(__dirname,'../templates/bloghome.html'))
    res.render('bloghome', {
        blogs: blogs
    })
})
router.get('/blogpost/:slug', (req, res) => {
    console.log(req.params.slug)
    myBlog = blogs.filter(blog => {
        return blog.slug==req.params.slug
    })
    res.render('blogpost', {
        blog: myBlog[0].title,
        content: myBlog[0].content,
        slug: myBlog[0].slug
    })
})

module.exports = router
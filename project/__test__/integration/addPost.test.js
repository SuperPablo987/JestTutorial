describe('POST /posts', () => {
    it('creates a new post', async () => {
        // create test data
        const post = {
        title: 'Test post',
        content: 'This is a test post.'
    };

    // make a POST request to the /posts endpoint
    const res = await request(app).post('/posts').send(post);

    // assert that the response status is 201 (created)
    expect(res.status).toBe(201);

    // assert that the response body contains the test post data
    expect(res.body).toEqual({
    
        _id: expect.any(String),
        
        title: post.title,
        
        content: post.content
    
    });

    // check if the post was created in the database
    const createdPost = await Post.findById(res.body._id);
    
        expect(createdPost).toEqual(expect.objectContaining(post));
    
    });
    
});
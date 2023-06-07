it('should return all posts', async () => {

    const res = await request(app).get('/posts');
    
    expect(res.status).toBe(200);
    
    expect(res.body).toBeInstanceOf(Array);
    
});

it('should return a specific post', async () => {

    const post = await request(app)
    
    .post('/posts')
    
    .send({ title: 'Test Post', content: 'This is a test post.' });
    
    const res = await request(app).get(`/posts/${post.body._id}`);
    
    expect(res.status).toBe(200);
    
    expect(res.body.title).toBe('Test Post');
    
    expect(res.body.content).toBe('This is a test post.');
    
});
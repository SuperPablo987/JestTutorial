it('should update a specific post', async () => {

    const post = await request(app)
    
    .post('/posts')
    
    .send({ title: 'Test Post', content: 'This is a test post.' });
    
    const res = await request(app)
    
    .put(`/posts/${post.body._id}`)
    
    .send({ title: 'Updated Test Post' });
    
    expect(res.status).toBe(200);
    
    expect(res.body.title).toBe('Updated Test Post');
    
});
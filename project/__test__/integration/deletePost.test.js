it('should delete a specific post', async () => {

    const post = await request(app)
    
    .post('/posts')
    
    .send({ title: 'Test Post', content: 'This is a test post.' });
    
    const res = await request(app).delete(`/posts/${post.body._id}`);
    
    expect(res.status).toBe(200);
    
    expect(res.body._id).toBe(post.body._id);
    
});
    

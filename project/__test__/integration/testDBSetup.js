const mockgoose = require('mockgoose');

mockgoose(mongoose);

const post = mongoose.model('Post', { title: String, content: String });
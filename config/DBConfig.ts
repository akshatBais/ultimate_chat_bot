import mongoose = require('mongoose');

export const dbSetup = () => {
  const uri = process.env.DB_URL;
  
  if(uri)
    mongoose.connect(uri, { useNewUrlParser: true }).then(() => {
     console.log('connected')
    }).catch(err => {
      console.log(err);
    });

}

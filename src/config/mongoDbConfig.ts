import {connect} from 'mongoose';

const dbURI =
  'mongodb+srv://dipanshumahato:LoEFbs9diDLIsCXS@cluster0.nwcakhm.mongodb.net/';

export default () => {
  return connect(dbURI, {dbName: 'SIH'})
    .then(data => {
      console.log('Connected to database successfully');
      return data;
    })
    .catch(error => {
      throw error;
    });
};

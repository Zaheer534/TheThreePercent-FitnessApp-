// realmService.js
import Realm from 'realm';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

const PdfFileSchema = {
  name: 'PdfFile',
  properties: {
    id: 'string',
    name: 'string',
    uri: 'string',
    date: 'date',
  },
  primaryKey: 'id',
};

const realm = new Realm({schema: [PdfFileSchema]});

export const getPdfFiles = () => {
  const pdfFiles = realm.objects('PdfFile');
  return [...pdfFiles];
};

export const addPdfFile = (name, uri) => {
  realm.write(() => {
    realm.create('PdfFile', {
      id: uuidv4(),
      name,
      uri,
      date: new Date(),
    });
  });
};

export const deletePdfFile = id => {
  realm.write(() => {
    const toDelete = realm.objects('PdfFile').filtered('id == $0', id);
    realm.delete(toDelete);
  });
};

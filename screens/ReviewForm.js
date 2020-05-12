import React from 'react';
import { View, Button, TextInput, Text} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import { globalStyles } from '../styles/global';
import FlatButton from '../shared/Button';

const reviewSchema = yup.object({
    title: yup.string()
      .required()
      .min(4),
    body: yup.string()
      .required()
      .min(8),
    rating: yup.string()
      .required()
      .test('is-rating-1-5', 'Rating must be between 1-5', (val) => {
        return parseInt(val) <6 && parseInt(val) > 0
      })
})

export default function ReviewForm ({ navigation, onSubmit }) {
    return (
      <View style={ globalStyles.container }>
         <Formik
            initialValues={{title: '', rating: '', body: ''}}
            onSubmit={(values, actions) => {
              console.log(values);
              actions.resetForm();
              onSubmit(values);
            }}
            validationSchema={reviewSchema}
         >
             {
               (formikProps) => (
                  <View>
                    <TextInput
                      style={globalStyles.input}
                      placeholder='Movie Title'
                      onChangeText={formikProps.handleChange('title')}
                      value={formikProps.values.title}
                      onBlur={formikProps.handleBlur('title')}
                    />
                    <Text style={globalStyles.errorText}>{formikProps.touched.title && formikProps.errors.title}</Text>
                    <TextInput
                      style={globalStyles.input}
                      placeholder='Movie Review'
                      onChangeText={formikProps.handleChange('body')}
                      value={formikProps.values.body}
                      onBlur={formikProps.handleBlur('body')}
                    />
                    <Text style={globalStyles.errorText}>{formikProps.touched.body && formikProps.errors.body}</Text>

                    <TextInput
                      style={globalStyles.input}
                      placeholder='Movie Rating 1-5'
                      onChangeText={formikProps.handleChange('rating')}
                      value={formikProps.values.rating}
                      keyboardType='numeric'
                      onBlur={formikProps.handleBlur('rating')}
                    />
                    <Text style={globalStyles.errorText}>{formikProps.touched.rating && formikProps.errors.rating}</Text>

                    <FlatButton
                      text='Submit' 
                      onPress={formikProps.handleSubmit} 
                    />
                  </View>
               )
             }
         </Formik>
      </View>
    );
}
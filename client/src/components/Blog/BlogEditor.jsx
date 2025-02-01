import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as Yup from "yup";
import { addBlog } from "../../services/functions/blogFunctions";

const BlogEditor = ()  => {
  const [preview, setPreview] = useState(false);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const handleSubmit = async(values) => {
    try {
      console.log('Values: ', values);
    const res = await addBlog(values);
    console.log('Res: ',res);
    } catch (error) {
      console.log('Error Saving: ',error);
      
    }
    
    
  }

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    content: Yup.string().required("Content cannot be empty"),
  });

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create Your Blog</h2>
      <Formik
        initialValues={{ title: "", description: "", content: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ values, setFieldValue, handleBlur }) => (
          <Form>
            {!preview ? (
              <>
                {/* Title Field */}
                <div className="mb-4">
                  <label className="block text-sm font-medium">Title</label>
                  <Field
                    name="title"
                    type="text"
                    className="w-full p-2 border rounded"
                  />
                  <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
                </div>
                
                {/* Description Field */}
                <div className="mb-4">
                  <label className="block text-sm font-medium">Description</label>
                  <Field
                    name="description"
                    as="textarea"
                    className="w-full p-2 border rounded"
                  />
                  <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
                </div>
                
                {/* Content (ReactQuill) */}
                <div className="mb-4">
                  <label className="block text-sm font-medium">Content</label>
                  <div className="bg-white shadow rounded-lg">
                    <ReactQuill
                      value={values.content}
                      onChange={(value) => setFieldValue("content", value)}
                      onBlur={() => handleBlur({ target: { name: "content" } })}
                      modules={modules}
                    />
                  </div>
                  <ErrorMessage name="content" component="div" className="text-red-500 text-sm" />
                </div>
                
                {/* Buttons */}
                <button
                  type="button"
                  onClick={() => setPreview(true)}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Preview
                </button>
                <button
                  type="submit"
                  className="mt-4 ml-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                  // onClick={handleSubmit(values)}
                >
                  Submit
                </button>
              </>
            ) : (
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-2">Preview</h2>
                <h3 className="text-lg font-bold">{values.title}</h3>
                <p className="text-gray-600">{values.description}</p>
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: values.content }}></div>
                <button
                  type="button"
                  onClick={() => setPreview(false)}
                  className="mt-4 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                >
                  Edit
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}


export default BlogEditor;
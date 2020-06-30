import React, { useState } from 'react';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
function RichEditor(props) {
  const [detail, setDetail] = useState('');
  return (
    <div className="rich-text-editer">
      <CKEditor
        editor={ClassicEditor}
        config={{
          toolbar: [
            "heading",
            "|",
            "bold",
            "italic",
            "link",
            "bulletedList",
            "numberedList",
            "blockQuote",
            "insertTable",
            "undo",
            "redo"
          ]
        }}

        data={detail}
        onInit={editor => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          
          setDetail(data)
          

          console.log({ event, editor, data });
        }}
        onBlur={editor => {
          console.log('Blur.', editor);
        }}
        onFocus={editor => {
          console.log('Focus.', editor);
        }}
      />


    </div>
  );

}

export default RichEditor;

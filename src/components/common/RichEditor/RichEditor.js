import React, { useState } from 'react';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-decoupled-document';

function RichEditor({onContentChange, content}) {
  

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

        data={content}
        onInit={editor => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          
          onContentChange(data)
          

          // console.log({ event, editor, data });
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

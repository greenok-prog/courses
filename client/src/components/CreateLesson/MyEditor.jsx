import React from "react";
import { useDispatch } from "react-redux";
import { EditorState, ContentState, convertFromHTML } from "draft-js";
import { convertToHTML } from "draft-convert";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { addLessonAction } from "../../store/actions/cards";

function MyEditor() {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const blockToHTML = convertToHTML(editorState.getCurrentContent());

  const blocksFromHTML = convertFromHTML(blockToHTML);
  const state = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );
  console.log(state.getPlainText());

  const dispatch = useDispatch();
  const uploadLesson = () => {};
  return (
    <div className="editor">
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={setEditorState}
      />
      <button
        onClick={() => dispatch(addLessonAction(blockToHTML))}
        className="btn w-100 mt-3"
      >
        Добавить
      </button>
    </div>
  );
}

export default MyEditor;

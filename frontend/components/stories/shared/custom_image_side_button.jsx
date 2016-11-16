import React from 'react';
import {
  ImageSideButton,
  Block,
  addNewBlock,
  createEditorState,
  Editor,
} from 'medium-draft';

// const cloud_name = ENV['CLOUD_NAME']
// const upload_preset = ENV['UPLOAD_PRESET']

class CustomImageSideButton extends ImageSideButton {

  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  /*
  We will only check for first file and also whether
  it is an image or not.
  */
  onChange(e) {

    var formData = new FormData();
    let photo;
    formData.append("image", e.target.files[0]);
    $.ajax({
      url: "https://api.imgur.com/3/image",
      type: "POST",
      datatype: "json",
      headers: {
        "Authorization": "Client-ID e8971a94c95382e"
      },
      data: formData,
      success: (response) => {
        photo = response.data.link;
          this.props.setEditorState(addNewBlock(
            this.props.getEditorState(),
            Block.IMAGE, {
              src: photo,
            }
          ));
      },
      cache: false,
      contentType: false,
      processData: false
    });
    this.props.close();
  }
}

export default CustomImageSideButton

import { ImageSideButton, Block, addNewBlock } from 'medium-draft';

class CustomImageSideButton extends ImageSideButton {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const formData = new FormData();
    let photo;
    formData.append('image', e.target.files[0]);
    $.ajax({
      url: 'https://api.imgur.com/3/image',
      type: 'POST',
      datatype: 'json',
      headers: {
        Authorization: 'Client-ID e8971a94c95382e',
      },
      data: formData,
      success: (response) => {
        photo = response.data.link;
        this.props.setEditorState(addNewBlock(
            this.props.getEditorState(),
            Block.IMAGE, {
              src: photo,
            },
          ));
      },
      cache: false,
      contentType: false,
      processData: false,
    });
    this.props.close();
  }
}

export default CustomImageSideButton;

import React from 'react'

class ImageUploadForm extends React.Component {
  constructor(props) {
    super(props)
    this.upload = this.upload.bind(this)
    this.state = {
      image: '',
    }

  }

  upload(e) {
  var formData = new FormData();
  formData.append("image", e.target.files[0])
  let photo;
  let t = this

  $.ajax({
    url: "https://api.imgur.com/3/image",
    type: "POST",
    datatype: "json",
    headers: {
      "Authorization": "Client-ID e8971a94c95382e"
    },
    data: formData,
    success: (response) => {
      console.log(response);
      photo = response.data.link;
      t.props.setMainImg(photo)
      },
      cache: false,
      contentType: false,
      processData: false
    });
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }


  render () {
    return (
      <div className='img-upload-form'>
        <input type="file" onChange={this.upload} accept='image/*' />
      </div>
    )
  }
}

export default ImageUploadForm

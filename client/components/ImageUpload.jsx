import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { uploadFile } from '../apis/profileImage'

export default function ImageUpload() {
  const [image, setImage] = useState(null)
  const { profileid } = useParams()
  const [profileImage, setProfileImage] = useState({
    image: '',
  })

  const handleImageUpload = (e) => {
    setImage(e.target.files[0])
  }

  const handleFileUpload = () => {
    uploadFile(profileid, image)
      .then((returnedImage) => {
        setProfileImage((currentData) => {
          return {
            ...currentData,
            image: returnedImage.href,
          }
        })
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <>
      <div>
        <h1>Upload image</h1>
        <form
          method='POST'
          onSubmit={handleImageUpload}
          action={'/api/v1/profiles/' + profileid + '/imageupload'}
          encType='multipart/form-data'
        >
          <input type='file' name='image' />
          <button type='submit' onClick={handleFileUpload}>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

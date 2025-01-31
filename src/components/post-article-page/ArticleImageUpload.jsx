import { useDropzone } from "react-dropzone"
import addImageIcon from "../../assets/add-image-icon.svg"
import deleteicon from "../../assets/deleteicon.svg"

export const ArticleImageUpload = ({
    setArticleImage,
    setImagePreview,
    imagePreview,
}) => {
    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0]
        if (file) {
            setArticleImage(file)
            setImagePreview(URL.createObjectURL(file))
        }
    }
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            "image/jpeg": [".jpg", ".jpeg"],
            "image/png": [".png"],
            "image/gif": [".gif"],
            "image/webp": [".webp"],
        },
        onDrop,
    })

    return (
        <div
            {...getRootProps()}
            id={
                imagePreview
                    ? "article-image-preview-container"
                    : "add-article-image-container"
            }
        >
            <input {...getInputProps()} type="file" name="article-image" />
            {imagePreview ? (
                <>
                    <img
                        src={imagePreview}
                        alt="Image Preview"
                        id="article-image-preview"
                    />
                    <div
                        onClick={(e) => {
                            e.stopPropagation()
                            setImagePreview(null)
                        }}
                        id="article-img-delete-icon-container"
                    >
                        <img src={deleteicon} alt="delete article image icon" />
                    </div>
                </>
            ) : (
                <>
                    <img src={addImageIcon} alt="add image icon" />
                    <p id="drag-and-drop-text">Drag & Drop an image here, or click to select</p>
                </>
            )}
        </div>
    )
}

// TODO: answer here

export default function UploadForm({ onSubmit }) {
  // TODO: answer here
  return (
    <div aria-label="Upload Form" className="upload-form">
      <form onSubmit={onSubmit}>
        <input type="file" name="file" />
        <div aria-label="Caption Input" className="caption-input">
          <input type="text" name="caption" placeholder="Caption" />
        </div>
        <div aria-label="Image Input" className="image-input">
          <input type="text" name="image" placeholder="Image" />
        </div>
        <button aria-label="Submit Button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

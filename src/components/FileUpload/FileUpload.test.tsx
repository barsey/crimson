import { render, screen, fireEvent } from '@/utils/test-utils';
import { FileUpload } from './FileUpload';

describe('FileUpload', () => {
  test('renders without errors', () => {
    render(<FileUpload onChange={() => {}} onClear={() => {}} value={null} />);
    expect(screen.getByTestId('file-upload-container')).toBeInTheDocument();
  });

  test('displays helper text when no file is selected', () => {
    render(<FileUpload onChange={() => {}} onClear={() => {}} value={null} />);
    expect(screen.getByText('Upload your file here...')).toBeInTheDocument();
  });

  test('displays selected file name when a file is selected', () => {
    const file = new File(['file content'], 'test-file.txt', {
      type: 'text/plain',
    });
    render(<FileUpload onChange={() => {}} onClear={() => {}} value={file} />);
    expect(screen.getByText('test-file.txt')).toBeInTheDocument();
  });

  test('calls onClear when clear button is clicked', () => {
    const handleClear = vi.fn();
    render(
      <FileUpload
        onChange={() => {}}
        onClear={handleClear}
        value={
          new File(['file content'], 'test-file.txt', { type: 'text/plain' })
        }
      />,
    );
    const clearButton = screen.getByTestId('clear-button');
    fireEvent.click(clearButton);
    expect(handleClear).toHaveBeenCalledTimes(1);
  });

  test('displays label and footerLabel when provided', () => {
    render(
      <FileUpload
        onChange={() => {}}
        onClear={() => {}}
        value={null}
        label='Upload your file'
        footerLabel='Footer Label'
        multiple
        isActive
      />,
    );
    expect(screen.getByText('Upload your file')).toBeInTheDocument();
    expect(screen.getByText('Footer Label')).toBeInTheDocument();
  });
});

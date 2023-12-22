# C:\Program Files\poppler-23.11.0\Library\bin

from pdf2image import convert_from_path

pdf_path = 'path.pdf'
images = convert_from_path(pdf_path, first_page=1, last_page=1, poppler_path=r'C:\Program Files\poppler-23.11.0\Library\bin')

if images:
    images[0].save('path_photo.png', 'PNG')

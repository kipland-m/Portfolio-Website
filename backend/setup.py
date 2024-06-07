from distutils.core import setup

setup(name="emailer",
      version='1.0',
      description='A simple django backend for my portfolio',
      author='Kipland Melton',
      author_email='kiplandmelton@gmail.com',
      url='https://kipland.net',
      packages=['asgiref==3.8.1','Django==5.0.6','django-cors-headers==4.3.1','djangorestframework==3.15.1',
                'sqlparse==0.5.0','typing_extensions==4.12.1']
)
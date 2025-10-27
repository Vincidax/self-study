try:
    f = open('test_file.txt')
    if f.name == 'test_file.txt':
        raise Exception
    
except FileNotFoundError as e:
    print(e)
except Exception as e:
    print('Error!')
else:
    print(f.read())
    f.close()
finally:
    print("Executing Finally...")
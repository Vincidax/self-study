value = input("Enter a value (number or string): ")

match value:
    case int():
        print("You entered an integer:", value)
    case str():
        print("You entered a string:", value)
    case _:
        print("Invalid data type entered.")
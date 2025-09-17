import random

secret_number = random.randint(1, 10)

while True:
    guess = int(input("Guess our number between 1 and 10: "))

    match guess:
        case guess if guess == secret_number:
            print("Congratulations, you guessed it.")
            break
        case guess if guess > secret_number:
            print("Oops, your guess is a bit high. Try again!")
        case guess if guess < secret_number:
            print("Nope, your guess is a bit low. Give it another shot!")
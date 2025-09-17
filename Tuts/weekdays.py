day = input("Enter a day of the week (Monday-Sunday): ").lower()

match day:
    case "monday":
        print("Ugh, Mondays...")
    case "tuesday":
        print("Just another workday...")
    case "wednesday":
        print("Hump day!")
    case "thursday":
        print("Almost there...")
    case "friday":
        print("TGIF!")
    case "Saturday" | "sunday": #Match multiple values with pipe(|)
        print("Weekend vibes!")
    case _:
        print("Invalid day entered.")
# I Justin_Challis, 001137680, certify that this work is my own effort and that I have not allowed anyone else to copy from it.


#tested program with all configurations of values

# ASSUME user inputs answer yes or no as string



answer1 = "Answer it"
answer2 = "Don't Answer it"

#Start

print( "*Cell Phone Rings*" )


answer = str( input( "Are you asleep? " ) )

if answer == "yes":
    print( answer2 )
    
if answer == "no":
    answer = str( input( "Is it your mom calling? " ) )
    if answer == "yes":
        print ( answer1 )
    if answer == "no":
        answer = str( input( "Is it morning? " ) )
        if answer == "yes":
            print( answer2 )
        if answer == "no":
            print( answer1 )

    
#End




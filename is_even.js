# function receives an array with a permutation (Python code)
# it determines whether the number of moves to sequence it is odd or even
# it does this by actually sequencing the array
# the array is required to have a sequence of 0-n, in any order

def is_even(p):
    moves = 0
    idx=0
    while (idx < len(p)):
        if p[idx] == idx:
            print ("no move")
        else:
            moves=moves+1
            x = p.index(idx)
            p[x] = p[idx]
            p[idx] = idx
        idx = idx+1
    if moves % 2 == 0:
        return True
    return False

a=[3,1,8,4,9]

print (is_even([0]))
print (is_even([0,2,1]))
print (is_even([1,2,0]))
print (is_even([1,2,0]))
print (is_even([1,2,0,4,3]))

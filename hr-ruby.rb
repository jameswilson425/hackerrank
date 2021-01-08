# migratory birds
def kangaroo(x1, v1, x2, v2)
  k1 = x1
  k2 = x2
  if x1 > x2 && v1 > v2
    return “NO”
  elsif x2 > x1 && v2 > v1
    return “NO”
  elsif x1 != x2 && v1 == v2
    return “NO”
  else
    while true
      k1 += v1
      k2 += v2
      if k1 == k2
        return “YES”
        break
      elsif k1 > k2
        return “NO”
        break
      end
    end
  end
end

kangaroo(0, 3, 4, 2)

# loop through and print out each number in the array
# conditional statement to determine whether the grade is failing or passing (over or below 38)
# conditional statement that determines whether the number is divisible by 5 or not
# conditional statement that if you add 1 to the grade and modulo is 0, add 1 to the number to round it
# conditional statement that says if you add 2 to the grade and modulo is 0, add 2 to the number to round it
def gradingStudents(grades)
  rounded_grades = []
  grades.each do |grade|
    if grade < 38
      rounded_grades << grade
    elsif grade % 5 == 0
      rounded_grades << grade
    elsif (grade + 1) % 5 == 0
      rounded_grades << grade + 1
    elsif (grade + 2) % 5 == 0
      rounded_grades << grade + 2
    else
      rounded_grades << grade
    end
  end
  rounded_grades
end

p gradingStudents([73, 67, 38, 33])

# map through apples and add position of tree to apple distance
# map through oranges and add position of tree to orange distance
# map through the new apple array and if the new number is between the range of the house, add a number to the counter
# map through the new orange array and if the new number is between the range of the house, add a number to the counter
def countApplesAndOranges(s, t, a, b, apples, oranges)
  apples_on_house = 0
  oranges_on_house = 0
  apples.map! do |apple|
    apple + a
  end
  oranges.map! do |orange|
    orange + b
  end
  apples.each do |apple|
    if apple >= s && apple <= t
      apples_on_house += 1
    end
  end
  oranges.each do |orange|
    if orange >= s && orange <= t
      oranges_on_house += 1
    end
  end
  p apples_on_house
  p oranges_on_house
end

countApplesAndOranges(7, 11, 5, 5, [-2, 2, 1], [5, -6])

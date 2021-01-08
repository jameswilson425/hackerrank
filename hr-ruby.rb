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

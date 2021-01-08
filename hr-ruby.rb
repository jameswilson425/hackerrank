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

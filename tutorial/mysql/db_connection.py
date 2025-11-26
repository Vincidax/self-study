import mysql.connector

db = mysql.connector.connect(host='localhost', user='root', password='Kigali@2025', database='united_nations')

print(db.server_info)
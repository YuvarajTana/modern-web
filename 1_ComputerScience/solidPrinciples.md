## SOLID Principles

### Single Responsibility Principle
    - A class should have only one reason to change.

    - This means that a class should have only one responsibility, as expressed through its methods. If a class takes care of more than one task, then you should separate those tasks into separate classes.



    ```Python 
        # file_manager_srp.py

        from pathlib import Path
        from zipfile import ZipFile

        class FileManager:
            def __init__(self, filename):
                self.path = Path(filename)

            def read(self, encoding="utf-8"):
                return self.path.read_text(encoding)

            def write(self, data, encoding="utf-8"):
                self.path.write_text(data, encoding)

            def compress(self):
                with ZipFile(self.path.with_suffix(".zip"), mode="w") as archive:
                    archive.write(self.path)

            def decompress(self):
                with ZipFile(self.path.with_suffix(".zip"), mode="r") as archive:
                    archive.extractall()
    ```


    ``` Python
        # file_manager_srp.py

        from pathlib import Path
        from zipfile import ZipFile

        class FileManager:
            def __init__(self, filename):
                self.path = Path(filename)

            def read(self, encoding="utf-8"):
                return self.path.read_text(encoding)

            def write(self, data, encoding="utf-8"):
                self.path.write_text(data, encoding)

        class ZipFileManager:
            def __init__(self, filename):
                self.path = Path(filename)

            def compress(self):
                with ZipFile(self.path.with_suffix(".zip"), mode="w") as archive:
                    archive.write(self.path)

            def decompress(self):
                with ZipFile(self.path.with_suffix(".zip"), mode="r") as archive:
                    archive.extractall()

    ```

    Now you have two smaller classes, each having only a single responsibility. FileManager takes care of managing a file, while ZipFileManager handles the compression and decompression of a file using the ZIP format. These two classes are smaller, so they’re more manageable. They’re also easier to reason about, test, and debug.




### Open Closed Principle

### Liskov Substitute Principle

### Interface Segerigation Principle

### Dependency Inversion Principle


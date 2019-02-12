# Document-Recognition
Cross-platform app, which uses OpenCV's OCR for acquiring data from official documents

Please, read the following:

1.Based on your PC's operating system, change sdk.dir value in "local.properties" file.

	OSX	sdk.dir = /Users/dev/Library/Android/sdk
	Linux	sdk.dir = /home/USERNAME/Android/Sdk
	Windows sdk.dir = C\:\\Users\\User\\AppData\\Local\\Android\\Sdk

2.In my case, I can modify the App.js file and see the changes only when using my Android smartphone for testing. In case of AVD, it just gets stuck at the first version no matter what code is contained in App.js file.


Instructions in Russian for the app launch:

1.Изменить значение sdk.dir как написано выше.

2.Поменять локальное значение для всех выражений "import smth from 'moduleName'", указав полный путь до документа в вашем компьютере. Например, import colors from 'C\:\Users\\User\\helloworld\\src\\config\\colors'. Это нужно сделать в файле App.js и еще 4-5 файлов в папках src\\components and src\\config.

3.Для андройд, понадобится JDK (возможно, придется поменять его на 8ю версию с 11й, если будут баги). Также понадобится Android Studio (возможно, вначале будут проблемы из-за версии Gradle и с ней тоже надо будет разобраться). Также нужно будет установить node.js+npm. И еще установить значение некоторых переменных, как в следующем гайде: https://facebook.github.io/react-native/docs/getting-started . Наверное, команду "react-native init projectName" можно не использовать, так как репозиторий на гитхабе и является данным проектом, но я не уверен, может эта команда еще как-то конфигурирует связь между папкой и Android Studio, JDK, итд.

Наверное, для безопасности, можно как на ссылке, попробовать запустить HelloWorld project, а потом интегрировать его как-нибудь с репозиторием на гитхабе.

Еще, наверное, неправильно хранить node_modules в той же самой папке, что и проект, но я так делаю)) и я его тоже добавил эту папку сюда, чтобы люди заново не качали некоторые модули, а сразу всё, что надо, скачали.

4.В конце: 

cd projectName

react-native run-android



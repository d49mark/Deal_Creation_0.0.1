# Deal Creation V0.0.1

Helps you to run validation and save Deal and Invoice Form details.
![](Deal_Creation.gif)

## Getting Started

Follow Steps to run on android or ios

### Prerequisites

npm, react-native cli, android studio, Xcode

### Installation

1. Download Zip or clone repository.
2. Extract and cd into Project Directory.
3. Run npm install in Project Directory
4. Create simulator using AVD manager in case of android and set simulator using Xcode in ios in whichever you wish to run
5. Run react-native run-android (for android) or react-native run-ios (for ios).
6. If you face any erorr in android or ios build the project using Android Studio or xcode following the steps as shown then run react-native run-android.
7. If you wish to run directly using Xcode => Goto ios folder=> open xcodeproj in xcode and run. For android open android folder in android studio => build and run Project.
8. That's it. If you still face any error do not hesitate to contact me.

### Validation Features

1. Listing Date in step 1 cannot be future date.
2. Issue Date in step 2 cannot be future date.
3. Repayment Date cannot be past date and also on or before Issued date.
4. (Optional-Shows Warning) Listing Date should be between Issued Date and Repayment Date.
5. User can come back to edit Listing Date while seeing Issued Date and Repayment Date filled in step 2 on step 1.

### Bugs

Cannot run tests due to Jest error after new react-native upgrade. Will be solved soon

## Authors

- **Dilip Kumar**

## License

This project is licensed under the Unlicense - see the [LICENSE.md](LICENSE.md) file for details

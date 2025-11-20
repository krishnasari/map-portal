# MAPPortalFrontend

Map Portal is a web application built with **Angular** for uploading, analyzing, and reporting data samples. It currently supports basic login, file upload, and a modular dashboard architecture.

## Getting Started

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version **20.3.10**.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. 

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Features

* Simple **Login / Authentication** (currently placeholder logic)
* **Dashboard** with navigation: Home, Upload, Reports, Settings
* **File Upload**: Allows uploading of data files (e.g., samples) — ready for backend
* Clean modular Angular architecture for maintainability
* Responsive / basic UI (can be styled further)

## Project Structure

```
src/
├── app/
│   ├── auth/
│   │   └── login/              # Login component / module  
│   ├── dashboard/              # Dashboard layout + container  
│   │   ├── dashboard.component.ts  
│   │   └── dashboard.component.html  
│   ├── pages/                  # Feature pages  
│   │   ├── home/  
│   │   ├── upload/  
│   │   ├── reports/  
│   │   └── settings/  
│   └── … (other modules)  
├── assets/  
└── index.html  
```
## Future Improvements

Some ideas for enhancements and next steps:

* Integrate a **backend** (Node.js, Python, etc.) to handle file uploads and analysis
* Implement **real authentication** (JWT, OAuth) instead of placeholder login
* Add **file validation** (type, size) for uploaded files
* Build a **reporting UI** with charts / tables (e.g., using Chart.js)
* Use **Angular environment files** for different configurations (dev / prod)
* Add **automated tests** (unit + e2e)

## Contributing

If you'd like to contribute:

1. Fork the repository
2. Create a branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit:

   ```bash
   git commit -m "Add [feature] or Fix [issue]"
   ```
4. Push your branch:

   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request - I'll review it.

## License

*(Optional) ---- *

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

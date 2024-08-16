# make file for simple nodejs application

APP_NAME = automated tax calculation system
SRC_DIR= src
NODE = node
BUILD_DIR= dist

BACKEND_DIR = backend
BACKEND_BUILD_DIR = $(BUILD_DIR)/$(BACKEND_DIR)

PNPM = pnpm



.PHONY: help
help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  install       Install dependencies"
	@echo "  start         Start the application"
	@echo "  build         Build the application"
	@echo "  clean         Clean the application"
	@echo "  help          Show this help message"
	@echo ""


# install dependencies

.PHONY: install
install:
	@echo "Installing dependencies...."
	$(PNPM) install




# start the backend app
.PHONY: start
start:
	@echo "Starting the application..."
	cd $(BACKEND_DIR) && $(PNPM) start:dev



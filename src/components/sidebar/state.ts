import { ref, computed, Ref } from "vue";

// Define a breakpoint for collapsing the sidebar
const BREAKPOINT_WIDTH = 991;
const BREAKPOINT_SMALL = 767;

// Reactive variable to store the collapsed state
export const collapsed: Ref<boolean> = ref(window.innerWidth < BREAKPOINT_WIDTH);
export const smallScreen: Ref<boolean> = ref(window.innerWidth < BREAKPOINT_SMALL);

// Function to update collapsed state when the window is resized
const updateStates = () => {
    collapsed.value = window.innerWidth < BREAKPOINT_WIDTH;
    smallScreen.value = window.innerWidth < BREAKPOINT_SMALL;
};

// Event listener for window resize event
window.addEventListener('resize', updateStates);

// Function to remove event listener when component is unmounted (cleanup)
const removeResizeListener = () => {
    window.removeEventListener('resize', updateStates);
};

// Toggle function to collapse/expand the sidebar
export const toggleSidebar = () => {
    collapsed.value = !collapsed.value;
};

// Width of sidebar based on collapsed state
export const SIDEBAR_WIDTH: number = 242;
export const SIDEBAR_WIDTH_COLLAPSED: number = 90;
export const sidebarWidth = computed(
    (): string => {
        if (smallScreen.value && collapsed.value) {
            return '0px'; // Sidebar width when both smallScreen and collapsed are true
        } else if (smallScreen.value && !collapsed.value) {
            return `${SIDEBAR_WIDTH}px`; // Sidebar width when smallScreen is true and collapsed is false
        } else {
            return `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`; // Sidebar width for other cases
        }
    }
);
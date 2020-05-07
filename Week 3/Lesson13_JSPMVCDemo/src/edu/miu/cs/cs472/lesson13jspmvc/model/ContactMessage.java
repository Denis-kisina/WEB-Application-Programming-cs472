package edu.miu.cs.cs472.lesson13jspmvc.model;

import java.util.Objects;

public class ContactMessage {
    private String customerName;
    private String gender;
    private String category;
    private String message;

    public ContactMessage() {
    }

    public ContactMessage(String customerName, String gender, String category, String message) {
        this.customerName = customerName;
        this.gender = gender;
        this.category = category;
        this.message = message;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ContactMessage that = (ContactMessage) o;
        return Objects.equals(customerName, that.customerName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(customerName);
    }

    @Override
    public String toString() {
        return "ContactMessage[" +
                "customerName='" + customerName + '\'' +
                ", gender='" + gender + '\'' +
                ", category='" + category + '\'' +
                ", message='" + message + '\'' +
                ']';
    }

}
